import React from "react";
import { ActivityRobot } from "../ts";

export interface IRobot {
    name: string;
    activity: ActivityRobot;
    id?: number;
}

interface IResources {
  foo: number;
  bar:number;
  foobar:number
}

interface IFactory {
  robots: Array<IRobot>;
  resources: IResources
}
interface IState {
    factory: IFactory
}

type Props = {
  children: JSX.Element;
};

interface SwitchResourcePayload {
  activity: ActivityRobot;
  robot: IRobot
}

enum Actions {
  BUY_ROBOT = 'BUY_ROBOT',
  ADD_RESOURCE = 'ADD_RESOURCE',
  SWITCH_RESOURCE = 'SWITCH_RESOURCE'
};

type ReducerAction = {
  type: Actions;
  robot?: IRobot;
  resource?: ActivityRobot;
  payload?: SwitchResourcePayload;
}

interface IContextState {
  factory: IFactory;
  buyRobot: (robot: IRobot) => void;
  createResource: (resource: ActivityRobot ) => void;
  switchResource: (payload: SwitchResourcePayload) => void
}

let id = 0
const initialState: IState = {
    factory: {
      robots: [
        {
          id: id ,
          name: 'Oss',
          activity: ActivityRobot.foo
        },
      {
        id: id + 1,
        name: 'Oss',
        activity: ActivityRobot.bar
      }
    ], 
    resources: {foo: 0, bar: 0, foobar: 0}
  }
};


const initialContext: IContextState = {
    factory: {robots: [], resources: {foo: 0, bar: 0, foobar: 0}},
    buyRobot: () => {},
    createResource: () => {},
    switchResource: () => {}
}



const reducer = (state: IState, action: ReducerAction) => {
  switch (action.type) {
    case Actions.BUY_ROBOT:
      if(action && action.robot) {
        // Si on achete un robot, on soustrait les resources necessaire à sa création
        return {
          factory: {
            ...state.factory,
            resources: {
              ...state.factory.resources,
              foobar: state.factory.resources.foobar - 3,
              foo: state.factory.resources.foo - 6
            },
            robots: [
              ...state.factory.robots,
              {
                id: id++,
                name: action.robot.name,
                activity: action.robot.activity
            }]
          }
        }
      }
      return state
      case Actions.ADD_RESOURCE:
        if(action && action.resource) {
          const {resource} = action;
          // Si c'est un foobar, on doit enlever 1 ressource de chaque pour pouvoir la créer
          if(resource === ActivityRobot.foobar) {
            return {
              factory: {
                ...state.factory,
                resources: {
                  foo:  state.factory.resources.foo -1,
                  bar:  state.factory.resources.bar -1,
                  foobar : state.factory.resources.foobar + 1
                }
              }
            }
            // Sinon on ajoute 1 a la ressource en question
          } else {
            return {
              factory: {
                ...state.factory,
                resources: {
                  ...state.factory.resources,
                  [resource as string]: state.factory.resources[resource] + 1
                }
              }
            }
          }
        }
        return state;
        case Actions.SWITCH_RESOURCE: 
        if(action && action.payload) {
          const {activity, robot} = action.payload;
          // on recrée le tableau de robots pour changer la ressource, pouvait aussi se faire avec un .find
          return {
            factory: {
              ...state.factory,
              robots: state.factory.robots.map((robotStored: IRobot) => {
                if(robotStored.id === robot.id) {
                  return {
                    ...robot,
                    activity
                  }
                } else return robotStored
              })  
            }
          }
        }
        return state 
    default:
      return state;
  }
};
const FoobartoryContext = React.createContext<IContextState>(initialContext);

export const FoobartoryProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    factory: state.factory,
    buyRobot: (robot: IRobot) => dispatch({ type: Actions.BUY_ROBOT, robot }),
    createResource: (resource: ActivityRobot) => dispatch({ type: Actions.ADD_RESOURCE, resource }),
    switchResource: (payload: SwitchResourcePayload) => dispatch({ type: Actions.SWITCH_RESOURCE, payload })
  }

  return (
    <FoobartoryContext.Provider value={value}>
      {children}
    </FoobartoryContext.Provider>
  );
}
export default FoobartoryContext
