declare global {
  // eslint-disable-next-line no-unused-vars
  interface Document {
    startViewTransition?: any
  }
  // eslint-disable-next-line no-unused-vars
  interface Window {
    navigation: {
      // eslint-disable-next-line no-unused-vars
      addEventListener: (event: string, listener: any) => void
    }
  }
}

const isViewTransitionCompatible = (): boolean => {
  return Boolean(document.startViewTransition)
}

/**
 * Cargamos la ruta de desino utilizando FETCH
 * y recuperamos todo el contenido del BODY.
 * @param {URL} url 
 * @returns HTML
 */
const fetchPage = async (url: string) => {
  const response = await fetch(url)
  const html = await response.text()

  const [,data] = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)!

  return data;
}

export const useViewTransitionApiIfIsCompatible = () => {
  if(!isViewTransitionCompatible) return

  window.navigation.addEventListener('navigate', (event: any) => {
    const toUrl = new URL(event.destination.url)

    if(location.origin !== toUrl.origin) return;

    event.intercept({
			async handler () {
        const data = await fetchPage(toUrl.pathname);

				// Utilizamos la API de View Transition API
				document.startViewTransition(() => {
					// Como tiene que actualizar la vista
					document.documentElement.scrollTop = 0
					document.body.innerHTML = data
				})
			}
		})
  })
}