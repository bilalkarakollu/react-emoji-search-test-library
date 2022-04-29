import React from 'react';
import { screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe("Emoji Search Test Starting",() => {

    let headerText, searchInput, emojiList;

    beforeEach(()=>{
        render(<App/>);
        headerText = screen.getByText(/Emoji Search/i);
        searchInput = screen.getByTestId("search-btn");
        emojiList = screen.getAllByTestId("emoji");
    });

    test("input control", () => {
        expect(searchInput).toBeInTheDocument();
    });
    
    test("header text control", () => {
        expect(headerText).toBeInTheDocument();
    });

    test("emoji result control", () => {
        expect(emojiList.length).toEqual(20);
    });

    test("filter control", () => {
        const filterText = "Grimacing";
        const filterTextResult = screen.getByText(filterText);
        userEvent.type(searchInput, filterText);
        expect(filterTextResult).toBeInTheDocument();
    })

})