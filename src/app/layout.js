import './globals.css';

export const metadata = {
  title: 'Main | TodoList',
  description: 'TodoList Management Service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {/* <section>lorem*20</section> */}
      </body>
    </html>
  );
}
