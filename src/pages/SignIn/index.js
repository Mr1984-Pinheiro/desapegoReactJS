import React from 'react'
import { PageContainer, PageTitle } from '../../components/MainComponents'
import { PageArea } from './styled'

export default function Page() {
    return (
        <PageContainer>
            <PageTitle>
                Login
            </PageTitle>
            <PageArea>
                <form>
                    <label className="area">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input type="email" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input">
                            <input className="checkbox" type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

