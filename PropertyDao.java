package com.homerental;

import java.util.List;

public interface PropertyDao {

    void addProperty(Property p);

    void updateProperty(Property p);

    void deleteProperty(int propertyId);

    Property searchProperty(int propertyId);

    List<Property> displayAllProperties();

}