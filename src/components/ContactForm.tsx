'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle, Shield, AlertTriangle } from 'lucide-react';

const schema = yup.object({
  name: yup.string().required('İsim gereklidir'),
  email: yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta gereklidir'),
  phone: yup.string().required('Telefon numarası gereklidir'),
  subject: yup.string().required('Konu gereklidir'),
  message: yup.string().min(10, 'Mesaj en az 10 karakter olmalıdır').required('Mesaj gereklidir'),
}).required();

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Burada form verilerini gönderebilirsiniz
      // Örnek: API endpoint'e POST isteği
      console.log('Form data:', data);
      
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 border border-purple-100">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">İletişim Formu</h3>
      </div>

      {/* Güvenlik Uyarısı */}
      <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-orange-800 mb-1">Önemli Uyarı</h4>
            <p className="text-xs text-orange-700">
              Bu form sadece iletişim amaçlıdır. Sağlık verisi toplanmamaktadır. 
              Tedavi için mutlaka uzman bir fizyoterapiste danışınız.
            </p>
          </div>
        </div>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span className="text-green-700">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              İsim Soyisim *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="İsim soyisim"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-posta *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="ornek@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.phone ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="0555 123 45 67"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Konu *
            </label>
            <select
              id="subject"
              {...register('subject')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.subject ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Konu seçiniz</option>
              <option value="bilgi">Bilgi Alma</option>
              <option value="randevu">Randevu Talebi</option>
              <option value="blog">Blog Hakkında Soru</option>
              <option value="oneri">Öneri</option>
              <option value="diger">Diğer</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mesajınız *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Mesajınızı buraya yazınız... (Sağlık verisi paylaşmayınız)"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
            <a href="/kvkk" className="text-purple-600 hover:underline">KVKK</a> şartlarını okudum ve kabul ediyorum. 
            Kişisel verilerimin sadece iletişim amaçlı kullanılacağını biliyorum. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Mesaj Gönder
            </>
          )}
        </button>
      </form>

      {/* Alt Bilgi */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Bu form sadece iletişim amaçlıdır. Sağlık verisi toplanmamaktadır. 
          Tedavi için mutlaka uzman bir fizyoterapiste danışınız.
        </p>
      </div>
    </div>
  );
};

export default ContactForm; 