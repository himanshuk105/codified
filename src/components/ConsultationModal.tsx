'use client'

import { useModal } from '@/context/ModalContext'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { InputField } from './Homepage/Footer'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

export const ConsultationModal = () => {
  const { isOpen, closeModal } = useModal()
  const [form, setForm] = useState<any[] | null>(null)
  const [formID, setFormID] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_URI}/api/forms?where[title][equals]=Free Consultation`,
        )
        const data = await response.json()
        const form = data.docs[0]
        setForm(form?.fields || [])
        setFormID(form?.id || null)
      } catch (error) {
        console.error('Failed to fetch form data:', error)
        setForm([])
      }
    }
    getData()
  }, [])

  const onSubmit = async (data: any) => {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      const res = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formID,
          submissionData: dataToSend,
        }),
      })

      if (!res.ok) throw new Error('Form submission failed')
      console.log('✅ Submitted successfully')
      reset()
      closeModal()
    } catch (err) {
      console.error('❌ Error submitting form:', err)
    }
  }

  if (!isOpen) return null
  if (!form) return <h1>Loading...</h1>

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-zinc-900 text-white p-8 rounded-2xl w-full max-w-5xl shadow-xl relative border border-zinc-700"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.2 }}
            onClick={closeModal}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-transform"
          >
            <X size={24} />
          </motion.button>

          {/* Heading */}
          <div className="mb-6 text-center">
            <motion.h2
              className="text-3xl font-extrabold mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Free Consultation
            </motion.h2>
            <motion.p
              className="text-zinc-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get expert advice tailored to your needs.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-zinc-800 p-6 rounded-xl border border-zinc-700"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* CMS dynamic fields */}
            {form.length > 0 ? (
              form.map((field, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <InputField
                    label={field.label || field.name || `Field ${index + 1}`}
                    name={field.name}
                    type={field.blockType}
                    options={field.options || []}
                    register={register}
                    error={
                      typeof errors[field.name]?.message === 'string'
                        ? errors[field.name]?.message
                        : undefined
                    }
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400 italic col-span-2">No form fields configured.</p>
            )}

            {/* Date Picker */}
            <motion.div
              className="flex flex-col col-span-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label className="block text-sm mb-1 text-white">Preferred Consultation Date</label>
              <input
                type="date"
                min={today}
                {...register('preferredDate', { required: 'Date is required' })}
                className="bg-zinc-700 border border-zinc-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {typeof errors['preferredDate']?.message === 'string' && (
                <p className="text-red-400 text-xs mt-1">{errors['preferredDate']?.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="md:col-span-2 flex justify-end"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="mt-4 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition border-2 border-white"
              >
                Submit & Schedule
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
