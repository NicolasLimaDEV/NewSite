import { ContatoContainer } from './contatoStyle'
import { FaLinkedinIn } from 'react-icons/fa'

const Contato = ()=> {
  return(
    <ContatoContainer>
      <h1>Contato</h1>

      <h3>Entre em contato comigo! </h3>
      <p>nicolaslima.dev.web@gmail.com</p>

      <button>
        <a href="https://linkedin.com/in/nicolaslimadev" target='_blank'>
          <span><FaLinkedinIn color='#0882BD' /></span>
          Linkedln
        </a>
      </button>
    </ContatoContainer>
  )
}

export default Contato