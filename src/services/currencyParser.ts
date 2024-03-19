
export default function currencyFormatter(value:number) {
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      minimumFractionDigits: 0,
      'currency':  'CLP'
    }) 
    return formatter.format(value)
  }