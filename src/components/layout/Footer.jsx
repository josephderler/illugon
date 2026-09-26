import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import { company, contact } from '../../lib/siteConfig';
import BrandWordmark from '../ui/BrandWordmark';
import PageLink from '../ui/PageLink';

export default function Footer() {
  const t = useT();

  return (
    <footer
      className="border-t px-6 py-16 sm:px-8"
      style={{
        backgroundColor: colorVar('paper-white'),
        borderColor: colorVar('fog'),
      }}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <BrandWordmark />
            <p
              className="mt-5 text-body-sm"
              style={{ color: colorVar('graphite') }}
            >
              {t.footer.tagline}
            </p>

            <address className="mt-5 flex flex-col gap-1 text-body-sm not-italic">
              <a
                href={contact.emailHref}
                className="no-underline transition-opacity duration-150 hover:opacity-70"
                style={{ color: colorVar('graphite') }}
              >
                {contact.email}
              </a>
              <a
                href={contact.altEmailHref}
                className="no-underline transition-opacity duration-150 hover:opacity-70"
                style={{ color: colorVar('graphite') }}
              >
                {contact.altEmail}
              </a>
              <a
                href={contact.phoneHref}
                className="no-underline transition-opacity duration-150 hover:opacity-70"
                style={{ color: colorVar('graphite') }}
              >
                {contact.phone}
              </a>
              <span style={{ color: colorVar('mist-blue') }}>
                {company.legalName}
                <br />
                {contact.addressLines.join(', ')}
              </span>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            {t.footer.columns.map((col) => (
              <div key={col.title}>
                <h3
                  className="text-caption font-semibold"
                  style={{ color: colorVar('ember-orange') }}
                >
                  {col.title}
                </h3>
                <ul className="mt-4 flex list-none flex-col gap-3 p-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <PageLink
                        page={link.page}
                        href={link.href}
                        hash={link.hash}
                        external={link.external}
                        className="text-body-sm no-underline transition-opacity duration-150 hover:opacity-70"
                        style={{ color: colorVar('graphite') }}
                      >
                        {link.label}
                      </PageLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          className="font-micro text-tiny"
          style={{ color: colorVar('mist-blue') }}
        >
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
