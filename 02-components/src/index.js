import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <div>
              <h4>Warning!</h4>
              <p>Are you sure you want to do this?</p>
            </div>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author={ faker.name.findName() }
              image={ faker.image.avatar() }
              timeAgo={ faker.date.past().toTimeString() }
              content={ faker.lorem.sentence() }
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author={ faker.name.findName() }
              image={ faker.image.avatar() }
              timeAgo={ faker.date.past().toTimeString() }
              content={ faker.lorem.sentence() }
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author={ faker.name.findName() }
              image={ faker.image.avatar() }
              timeAgo={ faker.date.past().toTimeString() }
              content={ faker.lorem.sentence() }
            />
          </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))
