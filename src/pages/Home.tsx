import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import GoogleIconImg from '../assets/img/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();

    async function navigatetoNewRoom(){
        if (!user){
            await signInWithGoogle();
        }

        history.push('/room/new');
    }

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={navigatetoNewRoom}>
                        <img src={GoogleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}