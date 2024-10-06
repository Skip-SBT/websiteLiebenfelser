import * as React from 'react';
import {WelcomeSection} from "./WelcomeSection";
import {CompanyInfo} from "./CompanyInfo";

export function MainPage(): React.ReactElement {
    return (
        <body>
            <WelcomeSection/>
            <CompanyInfo/>
        </body>
    );
}
