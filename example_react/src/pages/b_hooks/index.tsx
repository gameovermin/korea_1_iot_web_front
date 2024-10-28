import React from 'react'
import UseState01 from './a_UseState/UseState01'
import UseState02 from './a_UseState/UseState02'
import UseState03 from './a_UseState/UseState03'
import UseState04 from './a_UseState/UseState04'
import UseState05 from './a_UseState/UseState05'
import ChildComponent from './a_UseState/ChildComponent'
import UseState06 from './a_UseState/UseState06'
import UseRef01 from './b_UseRef/UseRef01'
import UseRef02 from './b_UseRef/UseRef02'
import UseRef03 from './b_UseRef/UseRef03'
import UseEffect01 from './c_UseEffect/UseEffect01'
import UseEffect02 from './c_UseEffect/UseEffect02'
import UseMemo01 from './d_Use/UseMemo01'
import UseMemo02 from './d_Use/UseMemo02'
import UseCallback01 from './d_Use/UseCallback01'
import UseReducer01 from './e_UseReducer/UseReducer01'
import UseReducer02 from './e_UseReducer/UseReducer02'
import Custom01 from './f_CustomHook/Custom01'
import Custom02 from './f_CustomHook/Custom02'

export default function Index() {
  return (
    <div>
      <h2 style={{backgroundColor: "black", color: "white"}}>리앹그의 Hook</h2>

      <h2>Use Reducer</h2>
      <UseReducer01 />

      <hr />
      <UseReducer02 />

      <h2>Custom Hooks</h2>

      <Custom01 />

      <hr />

      <Custom02 />


      <h2>Use State</h2>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <hr />
      <UseState04 />
      <hr />
      <UseState05 />
      <hr />
      <UseState06 />
      <hr />
      {/* <ChildComponent /> */}

      <hr />
      <UseRef01 />

      <hr />
      <UseRef02 />

      <hr />
      <UseRef03 />

      <h2>UseEffect</h2>
      <UseEffect01 />

      <hr />
      <UseEffect02 />

      <h2>Use Memo</h2>
      <UseMemo01 />
      <hr />
      <UseMemo02 />

      <h2>Use CallBack</h2>
      <UseCallback01 />
    </div>
  )
}
