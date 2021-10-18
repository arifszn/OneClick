import { AiFillGithub } from 'react-icons/ai';
import { SiGooglekeep, SiGooglemeet, SiGooglesheets } from 'react-icons/si';

const iconSize = '4rem';

export const actions = [
    {
        name: 'Google Meet',
        get icon() {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={iconSize} height={iconSize} viewBox="-13.1265 -18 113.763 108"><path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z" /><path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z" /><path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z" /><path fill="#2684fc" d="M20.5 20.5H0v31h20.5z" /><path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z" /><path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z" /></svg>;
        },
        description: 'Create a real-time meeting using Google Meet.',
        url: 'https://meet.new'
    },
    {
        name: 'Google Calendar',
        get icon() {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><rect width="22" height="22" x="13" y="13" fill="#fff"/><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"/><path fill="#1e88e5" d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"/><polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38"/><polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34"/><path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"/><polygon fill="#e53935" points="34,34 34,42 42,34"/><path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"/><path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"/></svg>;
        },
        description: 'Create and send a new Google Calendar invite.',
        url: 'https://meeting.new'
    },
    {
        name: 'Google Docs',
        get icon() {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/><path fill="#bbdefb" d="M40 13L30 13 30 3z"/><path fill="#1565c0" d="M30 13L40 23 40 13z"/><path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"/></svg>;
        },
        description: 'Create a new document using Google Docs.',
        url: 'https://docs.new'
    },
    {
        name: 'Google Sheet',
        color: '#34A853',
        get icon() {
            return <SiGooglesheets size={iconSize} color={this.color}/>;
        },
        description: 'Create a new spreadsheet using Google Sheets.',
        url: 'https://sheets.new'
    },
    {
        name: 'Google Keep',
        color: '#FFBB00',
        get icon() {
            return <SiGooglekeep size={iconSize} color={this.color} />;
        },
        description: 'Create a new note using Google Keep.',
        url: 'https://keep.new'
    },
    {
        name: 'GitHub',
        get icon() {
            return <AiFillGithub size={iconSize} />;
        },
        description: 'Create a new GitHub repository.',
        url: 'https://github.new'
    },
]