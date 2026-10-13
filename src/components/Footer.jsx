import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p>
            © {new Date().getFullYear()} Karthikeyan Umesh. {t.footer.note}
          </p>
          <p>{t.footer.analytics}</p>
        </div>
        <a href="#top" className="link-u">
          {t.ui.backToTop} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
