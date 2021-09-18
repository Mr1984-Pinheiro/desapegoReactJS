import React, { useState, useEffect } from 'react';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxAPI';


import { PageContainer } from '../../components/MainComponents';
import { Link } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);


    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>

                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>

                            </Link>
                        )}
                    </div>


                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i, k) =>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver Todos</Link>

                    <hr />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris magna, convallis at laoreet nec, efficitur non felis. Proin sit amet ante ligula. Proin at orci vitae nunc feugiat aliquet nec sit amet ligula. Curabitur scelerisque pretium turpis, a suscipit sapien ornare quis. Proin sit amet posuere justo, quis rhoncus quam. In vel velit eget mi convallis dignissim in eget odio. Sed pretium dignissim egestas. Morbi quis tincidunt ex. Sed vel faucibus nisi, nec faucibus erat. Fusce interdum magna ut libero iaculis, eget porttitor quam maximus. Fusce at dui vitae sapien convallis scelerisque.

                </PageArea>
            </PageContainer>
        </>

    );
}

export default Page;