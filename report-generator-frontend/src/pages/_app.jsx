import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '@fontsource/open-sans';



const AtoConcretoPlatform = ({ Component, pageProps: { session, ...pageProps }}) => {
  return (
   Component.auth ? (
        <Auth data={Component.auth}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )
  )
}

function Auth(props) {
  const { status } = useSession({ required: false })

  if (status === 'loading')
    return props.data.loading || <div>Loading...</div>
  
  return props.children
}

export default AtoConcretoPlatform
