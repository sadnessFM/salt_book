import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AnimalModal from "./components/AnimalModal";
import AuthModal from "./components/AuthModal";
import Profile from "./components/Profile";
import {Switch, Route} from "react-router-dom";
import "./index.css";
import Single from "./pages/Single";

import Api from "../src/api";

const Ctx = React.createContext({})

localStorage.setItem("users", "[\"su\", \"admin\"]")

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [animModalState, setAnimModalState] = useState("");
    const [authModalState, setAuthModalState] = useState(false);
    const [loginRegView, setView] = useState("login");
    const [curUser, setCurUser] = useState();

    const [animal, setAnimal] = useState({});   
    const [animals, setAnimals] = useState([]);

    const statuses = ["хз", "завезли в магазин", "продаются по скидке", "не всегда есть", "компания уходит из россии через неделю не будет", "больше с нами нет R.I.P in piss", ""]

    useEffect(() => {
        Api.getAll().then(data => setAnimals(data))
    }, []);

    return <Ctx.Provider value={{
            animals: animals,
            setAnimals: setAnimals,
            searchText: searchText,
            setSearchText: setSearchText,
            animal: animal,
            setAnimal: setAnimal,
            animModalState: animModalState,
            setAnimModalState: setAnimModalState,
            statuses: statuses,
            curUser: curUser,
            setCurUser: setCurUser,
            authModalState: authModalState,
            setAuthModalState: setAuthModalState,
            loginRegView: loginRegView,
            setView: setView
        }}>

        <Header/>

        <Switch>
            <Route exact path="/">
                <Main
                    setAnimal={setAnimal} />
            </Route>
            <Route exact path="/profile">
                <Profile user={curUser} />
            </Route>
            <Route path="/animals/:name">
                <Single />
            </Route>
        </Switch>
        
        <Footer />
        <AnimalModal />

        <AuthModal/>
    </Ctx.Provider>
}

export {App, Ctx};