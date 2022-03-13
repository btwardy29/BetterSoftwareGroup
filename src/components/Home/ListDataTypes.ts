export interface ListData {
  data: {
    Id: number;
    Guid: string;
    MediaTypeCode: string;
    MediaTypeDisplayName: string;
    MediaAgeRestrictionValueMin: number;
    MediaAgeRestrictionImageUrl: string;
    Title: string;
    Description: string;
    Year: number;
    Duration: number;
    ParentMediaId: number;
    ParentMediaTitle: string;
    ParentOrderInParent: number;
    OrderInParent: number;
    IsTrialContentAvailable: true;
    AvailableFrom: string;
    AvailableTo: string;
    StartDateTime: string;
    EndDateTime: string;
    People: {
      PersonId: number;
      PersonFullName: string;
      PersonRoleCode: string;
      PersonRoleDisplayName: string;
    }[];
    Categories: {
      CategoryId: number;
      CategoryCode: string;
      CategoryName: string;
    }[];
    Images: {
      Id: number;
      MediaId: number;
      PlatformCode: string;
      ImageTypeCode: string;
      Url: string;
      Width: number;
      Height: number;
      StorageSize: number;
    }[];
    Products: {
      Id: number;
    }[];
    PurchaseOffers: {
      MediaId: number;
      MediaTitle: string;
      MediaTypeCode: string;
      MediaTypeDisplayName: string;
      PurchasePeriodTypeCode: string;
      PurchasePeriodTypeName: string;
      PriceId: number;
      Price: number;
      CurrencyId: number;
      CurrencyCode: string;
    }[];
    Media: {
      Id: number;
      Guid: string;
      MediaTypeCode: string;
      MediaTypeDisplayName: string;
      MediaAgeRestrictionValueMin: number;
      MediaAgeRestrictionImageUrl: string;
      Title: string;
      Description: string;
      Year: number;
      Duration: number;
      ParentMediaId: number;
      ParentMediaTitle: string;
      ParentOrderInParent: number;
      OrderInParent: number;
      IsTrialContentAvailable: boolean;
      AvailableFrom: string;
      AvailableTo: string;
      StartDateTime: string;
      EndDateTime: string;
      People: {
        PersonId: number;
        PersonFullName: string;
        PersonRoleCode: string;
        PersonRoleDisplayName: string;
      }[];
      Categories: {
        CategoryId: number;
        CategoryCode: string;
        CategoryName: string;
      }[];
      Images: {
        Id: number;
        MediaId: number;
        PlatformCode: string;
        ImageTypeCode: string;
        Url: string;
        Width: number;
        Height: number;
        StorageSize: number;
      }[];
      Products: {
        Id: number;
      }[];
      PurchaseOffers: {
        MediaId: number;
        MediaTitle: string;
        MediaTypeCode: string;
        MediaTypeDisplayName: string;
        PurchasePeriodTypeCode: string;
        PurchasePeriodTypeName: string;
        PriceId: number;
        Price: number;
        CurrencyId: number;
        CurrencyCode: string;
      }[];
      Media: [null];
      SimilarMedia: [null];
    }[];
    SimilarMedia: {
      Id: number;
      Guid: string;
      MediaTypeCode: string;
      MediaTypeDisplayName: string;
      MediaAgeRestrictionValueMin: number;
      MediaAgeRestrictionImageUrl: string;
      Title: string;
      Description: string;
      Year: number;
      Duration: number;
      ParentMediaId: number;
      ParentMediaTitle: string;
      ParentOrderInParent: number;
      OrderInParent: number;
      IsTrialContentAvailable: true;
      AvailableFrom: string;
      AvailableTo: string;
      StartDateTime: string;
      EndDateTime: string;
      People: {
        PersonId: number;
        PersonFullName: string;
        PersonRoleCode: string;
        PersonRoleDisplayName: string;
      }[];
      Categories: {
        CategoryId: number;
        CategoryCode: string;
        CategoryName: string;
      }[];
      Images: {
        Id: number;
        MediaId: number;
        PlatformCode: string;
        ImageTypeCode: string;
        Url: string;
        Width: number;
        Height: number;
        StorageSize: number;
      }[];
      Products: {
        Id: number;
      }[];
      PurchaseOffers: {
        MediaId: number;
        MediaTitle: string;
        MediaTypeCode: string;
        MediaTypeDisplayName: string;
        PurchasePeriodTypeCode: string;
        PurchasePeriodTypeName: string;
        PriceId: number;
        Price: number;
        CurrencyId: number;
        CurrencyCode: string;
      }[];
      Media: [null];
      SimilarMedia: [null];
    }[];
  }[];
}
