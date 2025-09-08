export const useWhatsapp = () => {
    const config = useRuntimeConfig()
  
    const sanitize = (val) => (val || '').replace(/\D/g, '')

    const buildUrl = (number, text) => {
      const digits = sanitize(typeof number === 'string' ? number : String(config.public.whatsappNumber || ''))
      const base = `https://wa.me/${digits}`
      const querySource = typeof text === 'string'
        ? text
        : (typeof config.public.whatsappText === 'string' ? config.public.whatsappText : '')
      const query = (querySource || '').trim()
      return query ? `${base}?text=${encodeURIComponent(query)}` : base
    }
  
    return { buildUrl }
  }
  