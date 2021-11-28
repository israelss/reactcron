export function Responsive({ children, extraClasses }) {
  const responsiveBaseClasses = "transition-neon transform md:scale-125 lg:scale-150";
  const responsiveClasses = `${responsiveBaseClasses} ${extraClasses ?? ''}`;

  return (
    <div className={ responsiveClasses }>
      { children }
    </div>
  );
}
