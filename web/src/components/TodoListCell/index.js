import { withCell } from '@hammerframework/hammer-web'

import * as Component from './TodoListCell'

export const query = Component.query
export default withCell(Component)
