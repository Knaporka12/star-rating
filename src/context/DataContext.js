import { createContext, useState } from "react";

const DataContext = createContext({});

export const ContextProvider = ({children}) => {

    const [stars, setStars] = useState([
        {
            id: 1,
            color: 'black',
        },
        {
            id: 2,
            color: 'black',
        },
        {
            id: 3,
            color: 'black',
        },
        {
            id: 4,
            color: 'black',
        },
        {
            id: 5,
            color: 'black',
        },
        {
            id: 6,
            color: 'black',
        },
        {
            id: 7,
            color: 'black',
        },
        {
            id: 8,
            color: 'black',
        },
        {
            id: 9,
            color: 'black',
        },
        {
            id: 10,
            color: 'black',
        }
    ]);

    const [rate, setRate] = useState(false);

    const increaseStars = (range) => {
        let starsTab = [...stars];

        for (let i = 0; i < range; i++){
            starsTab[i].color = 'yellow';
        }

        setStars(starsTab); 
    }

    const decreaseStars = (starId) => {

        const updatedStars = [...stars];
        updatedStars[starId - 1].color = 'black';
        setStars(updatedStars);
    }

    const starsToBlack = () => {

        const blackStars = stars.map((star) => ({...star, color: 'black'}))
        setStars(blackStars);

    }

    const setCustomStars = (yellowBegin, yellowEnd) => {
        
        let updatedStars = [...stars];

        for (let i = yellowBegin; i < yellowEnd; i++){
            updatedStars[i].color = 'yellow';
        }

        for (let i = yellowEnd; i < updatedStars.length; i++){
            updatedStars[i].color = 'black';
        }

        setStars(updatedStars);

    }

    const handleMouseOver = (range) => {
        increaseStars(range)
    };

    const handleMouseOutStar = (starId) => {

        if (!rate || rate < starId) {
           decreaseStars(starId)
        }

    };

    const handleMouseOutContainer = () => {
        
        if (!rate) {
            starsToBlack();
        } else {
            setCustomStars(0, rate);
        }
    };

    const handleSetRate = (starId) => {

        if (rate === false){

            setRate(starId);

        } else {

            if (starId === rate){

                setRate(false);
                starsToBlack();
                //increaseStars(); //mogłoby to byc, ale chyba wole kiedy po odkliknięciu wszystkie gwiazdy stawaly sie czarne zeby widac bylo efekt odznaczenia rate'a

            } else {
                
                if (starId < rate) {
                    setCustomStars(0, starId); //jesli rate jest mniejszy niz popredni ustawiam gwiazdy do tego mniejszego rate'a
                }
                
                setRate(starId); //niezaleznie jednak czy mniejszy czy wiekszy i tak ustawiam oczywiscie tego rate'a

            }
        }
    }

    return (

        <DataContext.Provider value = {{

            stars,
            setStars,
            handleMouseOver,
            handleMouseOutStar,
            handleMouseOutContainer,
            handleSetRate

        }}>
            {children}    
        </DataContext.Provider>

    )

}

export default DataContext;