import React from 'react'
import { connect } from 'react-redux'
import { GC } from '../actions'

const GCbtn = ({ dispatch }) => {
	return (
		<div>
							<button type="GC" onClick={e => dispatch(GC())}>
					GC啦
        </button>
		</div>
	)
}

export default connect()(GCbtn)
