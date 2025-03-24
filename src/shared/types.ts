export type ModuleProps = {
  postConfig: {
    apiKey: string;
    identifier: string;
    templateCard: string;
    gender: string;
    barcode: string;
    discount: string;
    bonus: number;
    loyalty_level: string;
  };
  loyaltyConfig?: {
    showIssueCard?: boolean;
    showActivationCard?: boolean;
  };
};

export type BonusProps = {
  bonus: string;
  price: string;
  date: string;
  image: string;
};
