import { JSXElement } from 'solid-js';
import { render } from 'solid-js/web';
import { Route, Router, Routes } from 'solid-app-router';
import 'windi.css';

import { Home, Scores, NotFound, Game } from './pages';
import { Nav } from './components';

const AppRoutes = (): JSXElement => (
	<Router>
		<Routes>
			<Route path="/" component={Home} />
			<Route path="/game" component={Game} />
			<Route path="/scores" component={Scores} />
			<Route path="/*all" component={NotFound} />
		</Routes>
	</Router>
);

// TODO: remove main bg color once production is finished
const App = (): JSXElement => (
	<main class="h-screen w-screen bg-red-300 ">
		<Nav />
		<AppRoutes />
	</main>
);

render(() => <App />, document.getElementById('root')!);
