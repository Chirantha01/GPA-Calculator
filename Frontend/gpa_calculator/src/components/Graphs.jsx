import React from 'react'
import { AreaChart,
        Area ,
        ResponsiveContainer ,
        XAxis , 
        YAxis ,
        CartesianGrid , 
        Tooltip ,
        Legend} from 'recharts'

function Graphs(props) {

    const { user } = props;

  return (
    <ResponsiveContainer width={1000} height={400} className={"mx-auto mt-36"}>
        <div className='align-middle'>
          <AreaChart data={user.semester_GPAs} width={910} height={400}>

              <YAxis tick={{fill:"white", fontSize:"14px", fontWeight:"bold"}}/>
              <XAxis dataKey="name" tick={{fill:"white", fontSize:"14px", fontWeight:"bold"}}/>
              <CartesianGrid strokeDasharray="5 5"/>
              <Legend/>
              <Tooltip/>
              <Area 
                  dataKey="value" 
                  type='monotone' 
                  stroke='#2563eb' 
                  fill='#3b82f6' 
                  stackId='1'
                  
              />
          </AreaChart>
        </div>
    </ResponsiveContainer>
  )
}

export default Graphs
