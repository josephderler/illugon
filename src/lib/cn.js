/** Koşullu sınıf birleştirici — tek bağımlılığı olmayan minimal sürüm. */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}
