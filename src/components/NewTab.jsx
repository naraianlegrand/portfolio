import { useLang } from '../i18n'

// Screen-reader note for links that open in a new tab, in the current language.
export default function NewTab() {
  const { t } = useLang()
  return <span className="sr-only"> {t.ui.newTab}</span>
}
