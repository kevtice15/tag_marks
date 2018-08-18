import React from 'react';
import { TitleBar } from './TitleBar.js';
import { BookmarkGrid } from './BookmarkGrid.js';
import { FolderSelector } from './FolderSelector.js';
import { SearchBar } from './SearchBar.js';
import "../styles/App.css";

export class App extends React.Component{
    render() {
        const url = "https://medium.com/@Florian/freebie-google-material-design-shadow-helper-2a0501295a2d#.ftgsjmrtk";
        const text = "Freebie: Google Material Design Shadow Helper";

        const linkList = {
            listTitle: "Inspiration",
            links : [
                {
                    text: "Kollegorna | Digital agency — Design, technology & strategy",
                    url: "https://www.kollegorna.se/"
                },
                {
                    text: "Art Director · Tatiana Mac",
                    url: "http://tatianamac.com/"
                },
                {
                    text: "Ben Mingo — Interactive & Graphic Designer",
                    url: "http://www.benmingo.com/"
                },
                {
                    text: "Timothy Achumba. Designer at Microsoft — Interface Lovers",
                    url: "https://timothyachumba.com/projects/interface-lovers"
                }
            ]
        }
        const bookmarksList = [
            {
                listTitle: "Tacos Tacos Tacos Tacos Tacos",
                links : [
                    {
                        text: "Kollegorna | Digital agency — Design, technology & strategy",
                        url: "https://www.kollegorna.se/"
                    },
                    {
                        text: "Art Director · Tatiana Mac",
                        url: "http://tatianamac.com/"
                    },
                    {
                        text: "Ben Mingo — Interactive & Graphic Designer",
                        url: "http://www.benmingo.com/"
                    },
                    {
                        text: "Timothy Achumba. Designer at Microsoft — Interface Lovers",
                        url: "https://timothyachumba.com/projects/interface-lovers"
                    }
                ]
            },
            {
                listTitle: "Design",
                links : [
                    {
                        text: "Kollegorna | Digital agency — Design, technology & strategy",
                        url: "https://www.kollegorna.se/"
                    },
                    {
                        text: "Art Director · Tatiana Mac",
                        url: "http://tatianamac.com/"
                    },
                    {
                        text: "Ben Mingo — Interactive & Graphic Designer",
                        url: "http://www.benmingo.com/"
                    },
                    {
                        text: "Timothy Achumba. Designer at Microsoft — Interface Lovers",
                        url: "https://timothyachumba.com/projects/interface-lovers"
                    }
                ]
            },
            {
                listTitle: "Portfillyizzles",
                links : [
                    {
                        text: "Kollegorna | Digital agency — Design, technology & strategy",
                        url: "https://www.kollegorna.se/"
                    },
                    {
                        text: "Art Director · Tatiana Mac",
                        url: "http://tatianamac.com/"
                    },
                    {
                        text: "Ben Mingo — Interactive & Graphic Designer",
                        url: "http://www.benmingo.com/"
                    },
                    {
                        text: "Timothy Achumba. Designer at Microsoft — Interface Lovers",
                        url: "https://timothyachumba.com/projects/interface-lovers"
                    }
                ]
            },
            {
                listTitle: "Chicken Noodle Soup",
                links : [
                    {
                        text: "Kollegorna | Digital agency — Design, technology & strategy",
                        url: "https://www.kollegorna.se/"
                    },
                    {
                        text: "Art Director · Tatiana Mac",
                        url: "http://tatianamac.com/"
                    },
                    {
                        text: "Ben Mingo — Interactive & Graphic Designer",
                        url: "http://www.benmingo.com/"
                    },
                    {
                        text: "Timothy Achumba. Designer at Microsoft — Interface Lovers",
                        url: "https://timothyachumba.com/projects/interface-lovers"
                    }
                ]
            }
        ]
        return (
            <div className="app-container">
                <TitleBar />
                <BookmarkGrid bookmarkLists={bookmarksList} />
            </div>
        );
    }
}