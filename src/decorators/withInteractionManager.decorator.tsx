import React from 'react';
import { InteractionManager } from 'react-native';

const withInteractionManager = (WrappedComponent: React.ComponentType<any>): React.ComponentType<any> => {
  interface IState {
    readonly show: boolean;
  }
  class ContainerWrapper extends React.PureComponent<any, IState> {
    public readonly state: IState = {
      show: false,
    };
    private initialInteraction: any = null; // tslint:disable-line
    public componentDidMount(): void {
      InteractionManager.setDeadline(2000);
      // tslint:disable-next-line
      this.initialInteraction = InteractionManager.runAfterInteractions(() => {
        this.setState({ show: true });
      });
    }
    public componentWillUnmount(): void {
      if (this.initialInteraction && this.initialInteraction.cancel) {
        this.initialInteraction.cancel();
      }
    }
    public render(): React.ReactNode {
      const { show } = this.state;
      if (!show) {
        return (WrappedComponent as any).placeholder || null;
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return ContainerWrapper;
};

export default withInteractionManager;
