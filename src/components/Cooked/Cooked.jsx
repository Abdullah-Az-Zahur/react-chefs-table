import React from 'react'
import PropTypes from 'prop-types'

const Cooked = ({cooked, idx}) => {
    const {recipe_name, preparing_time, calories} = cooked;
  return (
    <div>
      {/* table */}
      <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{idx + 1}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time} Min</td>
                            <td>{calories} Calories</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

Cooked.propTypes = {

}

export default Cooked
