export const metadata = {
  title: 'AvantgesApp',
  description: 'Avantages for your business',
}
 
 function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default RootLayout