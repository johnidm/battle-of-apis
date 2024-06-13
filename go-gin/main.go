package main

import (
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	hostname, err := os.Hostname()
	if err != nil {
		panic(err)
	}

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":      "OK",
			"hostname":    hostname,
			"application": "go-gin",
		})
	})
	r.Run("0.0.0.0:8030")
}
