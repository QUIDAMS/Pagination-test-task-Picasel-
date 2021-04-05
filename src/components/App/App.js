import React, {Component} from "react";
import Card from "../Card";
import generateData from '../../data/items.js';
import Pagination from '../Pagination';

export default class App extends Component {
	state = {
		items: generateData(),
		perPage: +localStorage.getItem('perPage') || 10,
		currentPage: +localStorage.getItem('currentPage') || 0
	}

	onPerPageChange(e) {
		const perPage = +e.target.value
		localStorage.setItem('perPage', perPage)
		localStorage.setItem('currentPage', 0)
		this.setState({ perPage, currentPage: 0 });
	} 

	onChangeCurrentPage(e, i){
		e.preventDefault()
		this.setState({currentPage: i}, () => localStorage.setItem('currentPage', this.state.currentPage))
	}

	render(){
		const firstItem = this.state.currentPage * this.state.perPage;
		const lastItem = firstItem + this.state.perPage;
		const totalPages = Math.round(this.state.items.length / this.state.perPage);
		const allItems = this.state.items.slice(firstItem, lastItem).map((item, i) => {
			return <Card 
				key={i}
				text={item}
			/>
		});

		return(
			<div className="container container__position">
				<h2 className="container__title">Picasel</h2>
				<p className="container__subtitle">Тестовое задание</p>
				<div className="select__position">
					<select  onChange={(e) => this.onPerPageChange(e)}>
					  <option selected={this.state.perPage === 10} value={10}>10 позиций</option>
					  <option selected={this.state.perPage === 50} value={50}>50 позиций</option>
					  <option selected={this.state.perPage === 100} value={100}>100 позиций</option>
					</select>
				</div>
		  	<div className="row">
		    	{allItems}
		    </div>
				<Pagination 
					totalPages={totalPages}
					currentPage={this.state.currentPage}
					onChangeCurrentPage={(e, i) => this.onChangeCurrentPage(e, i)}
				/>
		  </div>
		);
	}
}
