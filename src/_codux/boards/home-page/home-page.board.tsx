import { createBoard } from '@wixc3/react-board';
import HomePage from '../../../pages/home/home.page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    isSnippet: true,
});
