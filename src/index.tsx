import { JSXElement } from 'solid-js';
import { render } from 'solid-js/web';
import { Route, Router, Routes } from 'solid-app-router';
import 'windi.css';

import { Home, Scores, NotFound } from './pages';
import { Nav } from './components';

function App(): JSXElement {
	return (
		<main id="app" class="bg-red-300">
			<Nav />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/scores" element={<Scores />} />
					<Route path="/*all" element={<NotFound />} />
				</Routes>
			</Router>
		</main>
	);
}

render(() => <App />, document.getElementById('root')!);
