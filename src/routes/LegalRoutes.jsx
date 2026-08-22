import { useT } from '../i18n';
import LegalPage from '../components/legal/LegalPage';

/**
 * Üç hukuki sayfa da aynı düzeni kullanır; farkı yalnızca hangi sözlük
 * bölümünü okuduklarıdır.
 */

export function PrivacyPage() {
  const t = useT();
  return <LegalPage pageKey="privacy" doc={t.legal.privacy} />;
}

export function TermsPage() {
  const t = useT();
  return <LegalPage pageKey="terms" doc={t.legal.terms} />;
}

export function KvkkPage() {
  const t = useT();
  return <LegalPage pageKey="kvkk" doc={t.legal.kvkk} />;
}
