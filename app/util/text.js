export const cropText = text =>
  text.length > 24 ? `${text.slice(0, 24)}...` : text
