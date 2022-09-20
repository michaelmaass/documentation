import { useRouter } from 'next/router'

import root from './pages/navigation.json'
import essentialsYoo from './pages/essentials-for-yoothemepro/forms/navigation.json'
import forms from './pages/essentials-for-yoothemepro/forms/navigation.json'

const navigation = {
  '/': root,
  '/forms': forms,
  '/essentials-for-yoothemepro': essentialsYoo
}

export function useNavigation() {
  const router = useRouter()

  const pathname = router.pathname
  return navigation[pathname] || []
}
