import React, { ComponentProps, ReactNode } from 'react';
import WalletsActionScreen from '../WalletsActionScreen/WalletsActionScreen';
import './WalletSuccess.scss';

type TSuccessProps = {
    description: string;
    renderButtons?: ComponentProps<typeof WalletsActionScreen>['renderButtons'];
    renderIcon: () => ReactNode;
    title: string;
};

const WalletSuccess: React.FC<TSuccessProps> = ({ description, renderButtons, renderIcon, title }) => {
    return (
        <div className='wallets-success'>
            <WalletsActionScreen
                desciptionSize='sm'
                description={description}
                icon={renderIcon()}
                renderButtons={renderButtons}
                title={title}
            />
        </div>
    );
};

export default WalletSuccess;