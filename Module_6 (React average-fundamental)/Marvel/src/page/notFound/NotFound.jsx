import { Link } from "react-router-dom/cjs/react-router-dom.min"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"

export const NotFoundPage = () => {
  return(
    <>
      <ErrorMessage/>
      <p style={{'display': 'block', 'text-align': 'center', 'font-weight': '500', 'font-size': '20px'}}>incorrect URL address</p>
      <Link style={{'display': 'block', 'text-align': 'center', 'color': '#9F0013', 'font-weight': '600', 'font-size': '28px'}} to='/'>Back to main page</Link>
    </>
  )
}