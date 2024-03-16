
function NotificationRead({read}) {
    const readTrue = [<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M29.985 9.71053C29.985 8.76316 29.43 7.93421 28.575 7.47368L15 0.5L1.425 7.47368C0.57 7.93421 0 8.76316 0 9.71053V22.8684C0 24.3158 1.35 25.5 3 25.5H27C28.65 25.5 30 24.3158 30 22.8684L29.985 9.71053ZM26.985 9.71054V9.7237L15 16.2895L3 9.71054L15 3.55265L26.985 9.71054ZM3 12.7895V22.8684H27L26.985 12.8289L15 19.3947L3 12.7895Z" fill="#F8F8F2"/>
    </svg>]
    const readFalse = [<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0.5H3C1.35 0.5 0.0150001 1.90625 0.0150001 3.625L0 22.375C0 24.0938 1.35 25.5 3 25.5H27C28.65 25.5 30 24.0938 30 22.375V3.625C30 1.90625 28.65 0.5 27 0.5ZM27 22.375H3V6.75L15 14.5625L27 6.75V22.375ZM3 3.625L15 11.4375L27 3.625H3Z" fill="#F8F8F2"/>
    </svg>]

    
  return (
    read?readTrue[0]:readFalse[0]    
  )
}

export default NotificationRead