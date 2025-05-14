import { Link } from "react-router-dom";
import "./NotFound.css";
import { Button } from "react-bootstrap";
import { useLanguage } from "../Context/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <div className={`custom-bg lang-${language}`}>
      <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-2 fw-medium mt-4">
            {language === "ar" ? "عذرًا! الصفحة غير موجودة" :
              language === "fr" ? "Oups ! Page non trouvée" :
                language === "zh" ? "哎呀！页面未找到" :
                  "Oops! Page not found"}
          </p>
          <p className="mt-4 mb-5">
            {language === "ar" ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها." :
              language === "fr" ? "La page que vous cherchez n'existe pas ou a été déplacée." :
                language === "zh" ? "您寻找的页面不存在或已被移动。" :
                  "The page you're looking for doesn't exist or has been moved."}
          </p>
          <Link to={"/"} className="text-decoration-none">
            <Button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
              {language === "ar" ? "العودة إلى الصفحة الرئيسية" :
                language === "fr" ? "Retour à l'accueil" :
                  language === "zh" ? "返回首页" :
                    "Back To Home"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;