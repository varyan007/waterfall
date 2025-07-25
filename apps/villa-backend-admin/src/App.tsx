import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { VillaList } from "./villa/VillaList";
import { VillaCreate } from "./villa/VillaCreate";
import { VillaEdit } from "./villa/VillaEdit";
import { VillaShow } from "./villa/VillaShow";
import { ServicePackageList } from "./servicePackage/ServicePackageList";
import { ServicePackageCreate } from "./servicePackage/ServicePackageCreate";
import { ServicePackageEdit } from "./servicePackage/ServicePackageEdit";
import { ServicePackageShow } from "./servicePackage/ServicePackageShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { EventBannerList } from "./eventBanner/EventBannerList";
import { EventBannerCreate } from "./eventBanner/EventBannerCreate";
import { EventBannerEdit } from "./eventBanner/EventBannerEdit";
import { EventBannerShow } from "./eventBanner/EventBannerShow";
import { PricingRuleList } from "./pricingRule/PricingRuleList";
import { PricingRuleCreate } from "./pricingRule/PricingRuleCreate";
import { PricingRuleEdit } from "./pricingRule/PricingRuleEdit";
import { PricingRuleShow } from "./pricingRule/PricingRuleShow";
import { LanguageContentList } from "./languageContent/LanguageContentList";
import { LanguageContentCreate } from "./languageContent/LanguageContentCreate";
import { LanguageContentEdit } from "./languageContent/LanguageContentEdit";
import { LanguageContentShow } from "./languageContent/LanguageContentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"villa-backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
        <Resource
          name="Villa"
          list={VillaList}
          edit={VillaEdit}
          create={VillaCreate}
          show={VillaShow}
        />
        <Resource
          name="ServicePackage"
          list={ServicePackageList}
          edit={ServicePackageEdit}
          create={ServicePackageCreate}
          show={ServicePackageShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="EventBanner"
          list={EventBannerList}
          edit={EventBannerEdit}
          create={EventBannerCreate}
          show={EventBannerShow}
        />
        <Resource
          name="PricingRule"
          list={PricingRuleList}
          edit={PricingRuleEdit}
          create={PricingRuleCreate}
          show={PricingRuleShow}
        />
        <Resource
          name="LanguageContent"
          list={LanguageContentList}
          edit={LanguageContentEdit}
          create={LanguageContentCreate}
          show={LanguageContentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
