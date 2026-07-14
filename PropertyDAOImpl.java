package com.homerental;



import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

public class PropertyDAOImpl implements PropertyDao {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public void addProperty(Property p) {

        try {

            con = DBConnection.getConnection();

            String sql = "INSERT INTO Property VALUES(?,?,?,?,?,?)";

            ps = con.prepareStatement(sql);

            ps.setInt(1, p.getPropertyId());
            ps.setString(2, p.getOwnerName());
            ps.setString(3, p.getLocation());
            ps.setString(4, p.getPropertyType());
            ps.setDouble(5, p.getRent());
            ps.setString(6, p.getStatus());

            int i = ps.executeUpdate();

            if(i > 0)
                System.out.println("Property Added Successfully");
            else
                System.out.println("Property Not Added");

        } catch(Exception e) {

            e.printStackTrace();

        }

    }

    public void updateProperty(Property p) {

        try {

            con = DBConnection.getConnection();

            String sql = "UPDATE Property SET ownerName=?, location=?, propertyType=?, rent=?, status=? WHERE propertyId=?";

            ps = con.prepareStatement(sql);

            ps.setString(1, p.getOwnerName());
            ps.setString(2, p.getLocation());
            ps.setString(3, p.getPropertyType());
            ps.setDouble(4, p.getRent());
            ps.setString(5, p.getStatus());
            ps.setInt(6, p.getPropertyId());

            int i = ps.executeUpdate();

            if(i > 0)
                System.out.println("Property Updated Successfully");
            else
                System.out.println("Property Not Updated");

        } catch(Exception e) {

            e.printStackTrace();

        }

    }

    public void deleteProperty(int propertyId) {

        try {

            con = DBConnection.getConnection();

            String sql = "DELETE FROM Property WHERE propertyId=?";

            ps = con.prepareStatement(sql);

            ps.setInt(1, propertyId);

            int i = ps.executeUpdate();

            if(i > 0)
                System.out.println("Property Deleted Successfully");
            else
                System.out.println("Property ID Not Found");

        } catch(Exception e) {

            e.printStackTrace();

        }

    }

    public Property searchProperty(int propertyId) {

        Property p = null;

        try {

            con = DBConnection.getConnection();

            String sql = "SELECT * FROM Property WHERE propertyId=?";

            ps = con.prepareStatement(sql);

            ps.setInt(1, propertyId);

            rs = ps.executeQuery();

            if(rs.next()) {

                p = new Property();

                p.setPropertyId(rs.getInt("propertyId"));
                p.setOwnerName(rs.getString("ownerName"));
                p.setLocation(rs.getString("location"));
                p.setPropertyType(rs.getString("propertyType"));
                p.setRent(rs.getDouble("rent"));
                p.setStatus(rs.getString("status"));

            }

        } catch(Exception e) {

            e.printStackTrace();

        }

        return p;

    }

    public List<Property> displayAllProperties() {

        List<Property> list = new ArrayList<Property>();

        try {

            con = DBConnection.getConnection();

            String sql = "SELECT * FROM Property";

            ps = con.prepareStatement(sql);

            rs = ps.executeQuery();

            while(rs.next()) {

                Property p = new Property();

                p.setPropertyId(rs.getInt("propertyId"));
                p.setOwnerName(rs.getString("ownerName"));
                p.setLocation(rs.getString("location"));
                p.setPropertyType(rs.getString("propertyType"));
                p.setRent(rs.getDouble("rent"));
                p.setStatus(rs.getString("status"));

                list.add(p);

            }

        } catch(Exception e) {

            e.printStackTrace();

        }

        return list;

    }

}