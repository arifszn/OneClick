import { AiFillGithub, AiOutlineCodepen, AiOutlineCodeSandbox } from 'react-icons/ai';
import { 
    SiAdobeacrobatreader,
    SiBuffer,
    SiCanva,
    SiDotnet,
    SiGlitch,
    SiGooglekeep,
    SiGooglesheets,
    SiIndeed,
    SiJamboard,
    SiMicrosoftteams,
    SiMiro,
    SiNamecheap,
    SiNextdotjs,
    SiRailway,
    SiRunkit,
    SiShopify,
    SiStackbit,
    SiSvelte,
    SiVercel 
} from 'react-icons/si';
import { FaNode, FaReact, FaSignature } from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { MdVpnLock } from 'react-icons/md';

const iconSize = '3rem';

export const actions = [
    {
        name: 'Google Meet',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={iconSize} height={iconSize} viewBox="-13.1265 -18 113.763 108"><path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z" /><path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z" /><path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z" /><path fill="#2684fc" d="M20.5 20.5H0v31h20.5z" /><path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z" /><path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z" /></svg>,
        description: "Create a real-time meeting using Google Meet.",
        url: 'https://meet.new'
    },
    {
        name: 'Google Calendar',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><rect width="22" height="22" x="13" y="13" fill="#fff"/><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"/><path fill="#1e88e5" d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"/><polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38"/><polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34"/><path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"/><polygon fill="#e53935" points="34,34 34,42 42,34"/><path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"/><path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"/></svg>,
        description: "Create and send a new Google Calendar invite.",
        url: 'https://meeting.new'
    },
    {
        name: 'Google Docs',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/><path fill="#bbdefb" d="M40 13L30 13 30 3z"/><path fill="#1565c0" d="M30 13L40 23 40 13z"/><path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"/></svg>,
        description: "Create a new document using Google Docs.",
        url: 'https://docs.new'
    },
    {
        name: 'Google Sheet',
        icon: <SiGooglesheets size={iconSize} color='#34A853' />,
        description: "Create a new spreadsheet using Google Sheets.",
        url: 'https://sheets.new'
    },
    {
        name: 'Google Keep',
        icon: <SiGooglekeep size={iconSize} color='#FFBB00' />,
        description: "Create a new note using Google Keep.",
        url: 'https://keep.new'
    },
    {
        name: 'Google Forms',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#673ab7" d="M12,44c-1.657,0-3-1.343-3-3V7c0-1.657,1.343-3,3-3h16l11,11v26c0,1.657-1.343,3-3,3H12z"/><path fill="#5e35b1" d="M39 15L28.883 14.125 39 24.124z"/><path fill="#b39ddb" d="M39,15h-8c-1.657,0-3-1.343-3-3V4L39,15z"/><path fill="#f5f5f5" d="M22 23H32V25H22zM22 28H32V30H22zM22 33H32V35H22zM17.5 22.5A1.5 1.5 0 1 0 17.5 25.5 1.5 1.5 0 1 0 17.5 22.5zM17.5 27.5A1.5 1.5 0 1 0 17.5 30.5 1.5 1.5 0 1 0 17.5 27.5zM17.5 32.5A1.5 1.5 0 1 0 17.5 35.5 1.5 1.5 0 1 0 17.5 32.5z"/></svg>,
        description: "Create a new form using Google Forms.",
        url: 'https://form.new'
    },
    {
        name: 'Google Slides',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#ffc107" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/><path fill="#ffecb3" d="M40 13L30 13 30 3z"/><path fill="#ffa000" d="M30 13L40 23 40 13z"/><path fill="#fff" d="M30,22H18c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V24C32,22.9,31.1,22,30,22z M30,26v8H18v-8H30z"/></svg>,
        description: "Create an online presentation using Google Slides.",
        url: 'https://slide.new'
    },
    {
        name: 'Google Sites',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#3949ab" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l4,6l6,4v29C40,43.657,38.657,45,37,45z"/><path fill="#1a237e" d="M40,13H30V3L40,13z"/><path fill="#fafafa" d="M15,19v3h18v-3H15z M30,25v8h3v-8H30z M15,33h12v-8H15V33z"/></svg>,
        description: "Create and publish a website using Google Sites.",
        url: 'https://site.new'
    },
    {
        name: 'Google Jamboard',
        icon: <SiJamboard size={iconSize} color='#F37C20' />,
        description: "Create a new Jamboard with Google.",
        url: 'https://jam.new'
    },
    {
        name: 'Google AppScript',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="27 70.348 464.718 372.87" width={iconSize} height={iconSize}><g fill="none" fillRule="evenodd"><path d="m27 382c0-29.823 24.175-54 53.993-54h264.014c29.82 0 53.993 24.17 53.993 54 0 29.823-24.175 54-53.993 54h-264.014c-29.82 0-53.993-24.17-53.993-54zm54 26c14.36 0 26-11.64 26-26s-11.64-26-26-26-26 11.64-26 26 11.64 26 26 26zm264 0c14.36 0 26-11.64 26-26s-11.64-26-26-26-26 11.64-26 26 11.64 26 26 26z" fill="#ea4335"/><path d="m87.733 195.084c17.53-24.127 51.298-29.477 75.42-11.95l213.593 155.183c24.125 17.528 29.475 51.29 11.94 75.423-17.529 24.128-51.297 29.478-75.42 11.951l-213.593-155.184c-24.124-17.527-29.474-51.29-11.94-75.423zm28.404 52.775c11.617 8.44 27.877 5.865 36.317-5.752s5.865-27.877-5.752-36.317-27.877-5.865-36.317 5.752-5.865 27.877 5.752 36.317zm213.58 155.175c11.618 8.44 27.877 5.865 36.317-5.752s5.865-27.876-5.752-36.316-27.876-5.865-36.316 5.752-5.865 27.876 5.752 36.316z" fill="#fbbc04"/><path d="m246.733 79.564c28.363-9.216 58.827 6.305 68.041 34.663l81.586 251.093c9.215 28.36-6.302 58.82-34.672 68.037-28.364 9.216-58.828-6.305-68.042-34.663l-81.586-251.093c-9.214-28.36 6.303-58.819 34.673-68.037zm-8.041 59.392c4.437 13.656 19.105 21.13 32.762 16.693 13.657-4.438 21.13-19.106 16.693-32.762-4.437-13.657-19.105-21.13-32.762-16.693s-21.13 19.105-16.693 32.762zm81.58 251.078c4.438 13.657 19.106 21.13 32.762 16.693 13.657-4.437 21.13-19.105 16.693-32.761-4.437-13.657-19.105-21.13-32.761-16.693-13.657 4.437-21.13 19.105-16.693 32.761z" fill="#34a853"/><path d="m448.53 81.325c28.2 9.71 43.188 40.439 33.48 68.632l-85.954 249.63c-9.709 28.195-40.432 43.183-68.637 33.471-28.198-9.71-43.187-40.439-33.48-68.632l85.955-249.63c9.709-28.195 40.432-43.183 68.637-33.47zm-42.163 42.593c-4.675 13.577 2.541 28.374 16.118 33.049s28.374-2.542 33.048-16.12c4.675-13.576-2.541-28.372-16.118-33.047s-28.374 2.541-33.048 16.118zm-85.95 249.617c-4.675 13.577 2.541 28.374 16.118 33.048 13.577 4.675 28.374-2.541 33.048-16.118 4.675-13.577-2.541-28.374-16.118-33.048-13.577-4.675-28.374 2.541-33.048 16.118z" fill="#4285f4"/></g></svg>,
        description: "Create and share new editor functions using Google App Script.",
        url: 'https://script.new'
    },
    {
        name: 'GitHub',
        icon: <AiFillGithub size={iconSize} />,
        description: "Create a new GitHub repository.",
        url: 'https://github.new'
    },
    {
        name: 'GitHub Gist',
        icon: <svg aria-hidden="true" viewBox="0 0 25 16" width={iconSize} height={iconSize}><path fill="currentcolor" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"></path></svg>,
        description: "Create a new GitHub gist.",
        url: 'https://gist.new'
    },
    {
        name: 'CodePen',
        icon: <AiOutlineCodepen size={iconSize} />,
        description: "Prototype your frontend code in CodePen's online development sandbox.",
        url: 'https://pen.new'
    },
    {
        name: 'Codespace',
        icon: <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize}><title>codespace-logomark</title><g fill="none" fillRule="evenodd"><rect fill="#50FC7C" x="11.4" width="14.1" height="4.5" rx="2.25"></rect><rect fill="#F75499" x="4.5" y="6.9" width="27.9" height="4.5" rx="2.25"></rect><rect fill="#7E8CE5" x="11.4" y="27.3" width="14.1" height="4.5" rx="2.25"></rect><rect fill="#FFED6F" y="13.8" width="14.1" height="4.5" rx="2.25"></rect><rect fill="#87E3F7" x="4.5" y="20.4" width="27.9" height="4.5" rx="2.25"></rect></g></svg>,
        description: "Create a new code snippet on Codespace.",
        url: 'https://snippet.new'
    },
    {
        name: 'React.js',
        icon: <FaReact size={iconSize} color='#61DAFB'/>,
        description: "Create a new React project online with CodeSandbox.",
        url: 'https://react.new'
    },
    {
        name: 'Vue.js',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>,
        description: "Create a new vue.js project online with CodeSandbox.",
        url: 'https://vue.new'
    },
    {
        name: 'Angular.js',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"/><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"/><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"/><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"/><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"/><path fill="#bdbdbd" d="M24 24H30V28H24z"/><path fill="#eee" d="M18 24H24V28H18z"/></svg>,
        description: "Create a new Angular project online with CodeSandbox.",
        url: 'https://ng.new'
    },
    {
        name: 'Node.js',
        icon: <FaNode size={iconSize} color='#5C9553'/>,
        description: "Create a new Node.js project online with CodeSandbox.",
        url: 'https://nodejs.new'
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs size={iconSize} />,
        description: "Create a new Next.js project online with stackblitz.",
        url: 'https://next.new'
    },
    {
        name: 'JavaScript',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>,
        description: "Create a new Javascript project online with CodeSandbox.",
        url: 'https://js.new'
    },
    {
        name: 'TypeScript',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><rect width="36" height="36" x="6" y="6" fill="#1976d2"/><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"/><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/></svg>,
        description: "Create a new Typescript project online with CodeSandbox.",
        url: 'https://ts.new'
    },
    {
        name: 'Flutter',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"/><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"/><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"/><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"/><polygon fill="#084994" points="21,39 30,36 27,33"/></svg>,
        description: "Create a new Flutter project online with dartpad.",
        url: 'https://flutter.new'
    },
    {
        name: 'Ionic',
        icon: <IoLogoIonic size={iconSize} color='#3880FF' />,
        description: "Create a high quality, cross-platform native and web app with Ionic.",
        url: 'https://ionic.new'
    },
    {
        name: '.NET',
        icon: <SiDotnet size={iconSize} color='#512BD4'/>,
        description: "Create a .NET application in Microsoft's Try .NET environment.",
        url: 'https://dotnet.new'
    },
    {
        name: 'Svelte',
        icon: <SiSvelte size={iconSize} color='#FF3E00'/>,
        description: "Create a new Svelte project online with CodeSandbox.",
        url: 'https://svelte.new'
    },
    {
        name: 'CodeSandbox',
        icon: <AiOutlineCodeSandbox size={iconSize} />,
        description: "Create a new project online with CodeSandbox.",
        url: 'https://csb.new'
    },
    {
        name: 'Glitch',
        icon: <SiGlitch size={iconSize} color='#3333FF'/>,
        description: "Create a full-stack app in your browser and collaborate live.",
        url: 'https://glitch.new'
    },
    {
        name: 'Proxy',
        icon: <MdVpnLock size={iconSize}/>,
        description: "Use a proxy server without having to connect to a VPN.",
        url: 'https://vpn.new'
    },
    {
        name: 'Microsoft Visual Studio',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><path fill="#ce93d8" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"/><path fill="#8e24aa" d="M4.416,33.815l3.159,1.95c0.733,0.44,1.664,0.365,2.318-0.185L34,15.938V5.353 c0-1.198-1.482-1.758-2.275-0.86L9,29.873L4.416,33.815z"/><path fill="#ab47bc" d="M4.416,14.185l3.159-1.95c0.733-0.44,1.664-0.365,2.318,0.185L34,32.063v10.585 c0,1.198-1.482,1.758-2.275,0.86L9,18.127L4.416,14.185z"/><path fill="#6a1b9a" d="M9,18.13v11.74l-3.2,3.74C5.22,34.37,4,33.96,4,33V15c0-0.96,1.22-1.37,1.8-0.61L9,18.13z"/></svg>,
        description: "Create a new Visual Studio codespace for your project.",
        url: 'https://env.new'
    },
    {
        name: 'bit.io',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17" width={iconSize} height={iconSize}>
          <path fill="#FDBD28" fillRule="evenodd" d="M8.88.56a7.9 7.9 0 010 15.8 7.9 7.9 0 010-15.8zm-6.23 7.9c0 .45.05.88.14 1.3 0 .03.06.03.06 0A6 6 0 018.88 3.8c.29 0 .52.23.52.51 0 .29-.23.52-.52.52a4.97 4.97 0 00-5 4.92c0 .06.07.07.09.02.65-1.92 2.65-3.25 4.91-3.25.29 0 .52.23.52.51 0 .29-.23.52-.52.52-2.33 0-4.1 1.66-4.1 3.56 0 1.9 1.77 3.57 4.1 3.57a6.22 6.22 0 006.09-7.59c-.01-.02-.05-.02-.05 0a5.9 5.9 0 01-5.9 5.9.52.52 0 01-.52-.52c0-.28.23-.51.51-.51 2.7 0 4.89-2.18 4.89-4.86 0-.04-.06-.05-.07-.01A4.98 4.98 0 019 10.4a.52.52 0 01-.51-.52c0-.28.23-.51.51-.51C11.27 9.37 13 7.72 13 5.8c0-1.7-1.38-3.2-3.28-3.5a6.22 6.22 0 00-7.07 6.16z" clipRule="evenodd"></path></svg>,
        description: "Easily query bit.io data repositories.",
        url: 'https://query.new'
    },
    {
        name: 'Editor X',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000" width={iconSize} height={iconSize}><g transform="translate(0.000000,64.000000) scale(0.012500,-0.012500)" fill="currentcolor" stroke="none"><path d="M290 5111 c-109 -34 -205 -117 -253 -219 l-32 -67 0 -2265 0 -2265 32 -67 c40 -85 106 -151 191 -191 l67 -32 2265 0 2265 0 67 32 c85 40 151 106 191 191 l32 67 0 2270 0 2270 -33 63 c-44 84 -108 146 -190 185 l-67 32 -2255 2 c-1240 1 -2266 -2 -2280 -6z m2045 -1656 c120 -245 221 -445 225 -445 3 0 105 200 225 445 l218 445 365 0 364 0 -20 -32 c-11 -18 -180 -317 -375 -665 l-356 -632 355 -623 c196 -343 369 -647 386 -675 l29 -53 -368 0 -369 0 -224 455 c-123 250 -226 455 -229 455 -3 0 -108 -205 -234 -455 l-227 -455 -366 0 -366 0 20 33 c11 17 182 319 382 670 229 405 360 645 357 657 -4 15 -656 1183 -719 1288 l-20 32 364 0 364 0 219 -445z"/></g></svg>,
        description: "Create a website using Editor X's online tool.",
        url: 'https://editorx.new'
    },
    {
        name: 'Miro',
        icon: <SiMiro size={iconSize} />,
        description: "Create a wireframe for your project using Miro.",
        url: 'https://wireframe.new'
    },
    {
        name: 'Matlab',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={iconSize} height={iconSize}><linearGradient id="Z8bG89TnZW8~BwJjzqmnXa" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf"/><stop offset=".699" stopColor="#3f5352"/><stop offset=".863" stopColor="#442729"/></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXa)" d="M21,27l-7-6c0,0,1-1.5,2.5-3s2.736-1.852,4.5-3c3.511-2.284,6.5-12,11-12L21,27z"/><linearGradient id="Z8bG89TnZW8~BwJjzqmnXb" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf"/><stop offset=".792" stopColor="#3f5352"/><stop offset="1" stopColor="#442729"/></linearGradient><polygon fill="url(#Z8bG89TnZW8~BwJjzqmnXb)" points="11,33.066 1,26 14,21 21.277,26.465 14,32.066"/><linearGradient id="Z8bG89TnZW8~BwJjzqmnXc" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stopColor="#53140f"/><stop offset=".3" stopColor="#84360f"/><stop offset=".413" stopColor="#b85b10"/><stop offset=".511" stopColor="#df7610"/><stop offset=".59" stopColor="#f68710"/><stop offset=".639" stopColor="#ff8d10"/><stop offset=".729" stopColor="#fd8a10"/><stop offset=".8" stopColor="#f58010"/><stop offset=".865" stopColor="#e86f10"/><stop offset=".925" stopColor="#d65811"/><stop offset=".982" stopColor="#c03a11"/><stop offset="1" stopColor="#b72f11"/></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXc)" d="M32,3c5,0,13,27,15,34c0,0-7.017-6.63-11-6s-5.47,6.548-9.725,10.756C23.5,44.5,21,45,21,45 s-0.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901,9.474-8.174S28.5,3,32,3z"/></svg>,
        description: "Use MATLAB and Simulink through your web browser.",
        url: 'https://matlab.new'
    },
    {
        name: 'Railway',
        icon: <SiRailway size={iconSize} />,
        description: "Create a new Railway deployment in the cloud.",
        url: 'https://dev.new'
    },
    {
        name: 'RunKit',
        icon: <SiRunkit size={iconSize} color='#DB4792' />,
        description: "Prototype and launch your APIs using RunKit.",
        url: 'https://api.new'
    },
    {
        name: 'Stackbit',
        icon: <SiStackbit size={iconSize} color='#207BEA' />,
        description: "Create a new Jamstack site.",
        url: 'https://jamstack.new'
    },
    {
        name: 'Vercel',
        icon: <SiVercel size={iconSize} />,
        description: "Create a new project in Vercel for preview and deployment.",
        url: 'https://deploy.new'
    },
    {
        name: 'PDF Compress',
        icon: <SiAdobeacrobatreader size={iconSize} color='#EC1C24' />,
        description: "Compress PDF documents with simple drag and drop with Adobe Acrobat.",
        url: 'https://compresspdf.new'
    },
    {
        name: 'Merge PDF',
        icon: <SiAdobeacrobatreader size={iconSize} color='#EC1C24' />,
        description: "Combine PDFs into one file with Adobe.",
        url: 'https://mergepdf.new'
    },
    {
        name: 'PDF to Word',
        icon: <SiAdobeacrobatreader size={iconSize} color='#EC1C24' />,
        description: "Convert PDFs to Word documents with Adobe.",
        url: 'https://pdftoword.new'
    },
    {
        name: 'Buffer',
        icon: <SiBuffer size={iconSize} />,
        description: "Schedule and manage your social media posts.",
        url: 'https://buffer.new'
    },
    {
        name: 'Email Signature',
        icon: <FaSignature size={iconSize} />,
        description: "Create a professional email signature in 30 seconds HoneyBook.",
        url: 'https://emailsignature.new'
    },
    {
        name: 'Canva Menu',
        icon: <SiCanva size={iconSize} color='#00C4CC'/>,
        description: "Create an appetizing menu using customizable templates from Canva.",
        url: 'https://menu.new'
    },
    {
        name: 'Canva Resume',
        icon: <SiCanva size={iconSize} color='#00C4CC'/>,
        description: "Create a professional-looking resume using templates from Canva.",
        url: 'https://resumes.new'
    },
    {
        name: 'Indeed',
        icon: <SiIndeed size={iconSize} color='#003A9B' />,
        description: "Create your online resume with Indeed.",
        url: 'https://profile.new'
    },
    {
        name: 'Microsoft Teams',
        icon: <SiMicrosoftteams size={iconSize} color='#6264A7' />,
        description: "Chat with your team using Microsoft Teams.",
        url: 'https://teams.new'
    },
    {
        name: 'Business Card',
        icon: <SiNamecheap size={iconSize} color='#DE3723' />,
        description: "Design personalized business cards with Namecheap.",
        url: 'https://businesscard.new'
    },
    {
        name: 'Personio',
        icon: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" width={iconSize} height={iconSize}><title>Personio</title><path d="M21.603 24H2.47v-1.563h19.133Zm-6.167-4.044c.557.145 1.137-.244 1.303-.867.166-.624-.157-1.25-.713-1.39-.556-.142-1.137.24-1.304.865-.167.624.156 1.25.714 1.39zM22.37.676c-1.737-1.347-5.387-.43-8.145.576A41.707 41.705 0 0 0 5.64 5.625C3.624 6.985 1.135 8.987.748 10.814a1.43 1.43 0 0 0 .28 1.263c.505.59 1.354.576 1.516.568a.781.781 0 0 0 .51-1.368.783.783 0 0 0-.58-.193.877.877 0 0 1-.181-.016c.58-2.136 6.69-6.232 12.47-8.342 3.858-1.408 5.964-1.342 6.649-.81.284.22.433.487.23 1.062-.545 1.535-3.2 3.96-7.108 6.48-.725.467-1.434.898-2.11 1.29.544-1.92 1.1-3.88 1.582-5.561a.782.782 0 0 0-1.504-.43 2070.72 2070.634 0 0 0-2.002 7.05c-1.564.811-2.754 1.3-3.22 1.366a.783.783 0 0 0-1.025 1.095c.134.226.4.476.929.476.088 0 .177-.007.264-.02.54-.073 1.417-.395 2.485-.884-.758 2.702-1.373 4.975-1.407 5.282a.781.781 0 0 0 .69.858.668.668 0 0 0 .087 0 .783.783 0 0 0 .775-.685c.062-.38.822-3.133 1.746-6.42a58.241 58.239 0 0 0 4.01-2.401c5.435-3.587 7.007-5.917 7.362-7.241.277-1.02-.017-1.93-.825-2.557z"/></svg>,
        description: "Track your candidate pipeline using Personio.",
        url: 'https://candidate.new'
    },
    {
        name: 'Shopify',
        icon: <SiShopify size={iconSize} color='#7AB55C' />,
        description: "Start a new online shop on Shopify.",
        url: 'https://shopify.new'
    },
    {
        name: 'Business Name',
        icon: <SiShopify size={iconSize} color='#7AB55C' />,
        description: "Designate your business name on Shopify.",
        url: 'https://businessname.new'
    },
]
