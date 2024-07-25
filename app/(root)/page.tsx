import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: 'Егор', lastName: 'Егоров', email: 'EpicSWAG123@yandex.ru' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Привествую"
                        user={loggedIn?.firstName || 'Путник'}
                        subtext="Получите доступ и эффективно управляйте своей учетной записью и транзакциями."
                    />

                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.70}
                    />
                </header>

                ПОСЛЕДНИЕ СДЕЛКИ

            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
            />
        </section>
    );
};

export default Home;