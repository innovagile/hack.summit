<?php

namespace CharityApp\Entity;

class Organization implements \JsonSerializable
{
    private $id;
    private $name;
    private $slug;
    private $lat;
    private $lon;
    private $blurb;
    private $description;

    /**
     * Organization constructor.
     * @param $id
     * @param $name
     * @param $slug
     * @param $lat
     * @param $lon
     * @param $blurb
     * @param $description
     */
    public function __construct($id, $name, $slug, $lat, $lon, $blurb, $description)
    {
        $this->id = $id;
        $this->name = $name;
        $this->slug = $slug;
        $this->lat = $lat;
        $this->lon = $lon;
        $this->blurb = $blurb;
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     *
     * @return Organization
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     *
     * @return Organization
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLat()
    {
        return $this->lat;
    }

    /**
     * @param mixed $lat
     *
     * @return Organization
     */
    public function setLat($lat)
    {
        $this->lat = $lat;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLon()
    {
        return $this->lon;
    }

    /**
     * @param mixed $lon
     *
     * @return Organization
     */
    public function setLon($lon)
    {
        $this->lon = $lon;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBlurb()
    {
        return $this->blurb;
    }

    /**
     * @param mixed $blurb
     *
     * @return Organization
     */
    public function setBlurb($blurb)
    {
        $this->blurb = $blurb;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     *
     * @return Organization
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'lat' => $this->lat,
            'lon' => $this->lon,
            'blurb' => $this->blurb,
            'description' => $this->description,
        ];
    }
}