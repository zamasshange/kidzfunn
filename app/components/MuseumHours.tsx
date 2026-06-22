import { siteConfig } from '../lib/siteConfig';

type MuseumHoursProps = {
  /** Tighter copy for the fixed sidebar / mobile nav */
  compact?: boolean;
};

export default function MuseumHours({ compact = false }: MuseumHoursProps) {
  const { hours } = siteConfig;

  if (compact) {
    return (
      <div className="site-header__open-close museum-hours museum-hours--compact">
        <div className="site-header__open-msg">
          <p>
            {hours.navLines.map((line, index) => (
              <span key={line.label}>
                {index > 0 ? <br /> : null}
                <strong>{line.label}</strong> {line.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="site-header__open-close museum-hours">
      <div className="site-header__open-msg">
        <p>
          <strong>Open</strong> {hours.daysLabel}
          <br />
          <strong>Museum Open</strong> {hours.museumOpen}
          <br />
          <strong>Member Hour</strong> {hours.memberHour}
        </p>
      </div>
    </div>
  );
}
