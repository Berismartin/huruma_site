import AboutHeader from '../components/AboutHeader';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AboutHeader />
      <div className="pt-16 lg:pt-20">
        {children}
      </div>
    </>
  );
} 